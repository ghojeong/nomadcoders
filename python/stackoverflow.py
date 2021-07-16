import requests
from bs4 import BeautifulSoup

INDEED_URL = "https://stackoverflow.com"
JOB_URL = f"{INDEED_URL}/jobs?q=python"

def get_jobs():
    last_page = extract_last_page()
    return extract_jobs(last_page)

def extract_last_page():
    result = requests.get(JOB_URL)
    soup = BeautifulSoup(result.text, "html.parser")
    pagination = soup.find("div", {"class":"s-pagination"})
    pages = pagination.find_all("a")
    last_page = pages[-2].get_text(strip=True)
    return int(last_page)

def extract_jobs(last_page):
    jobs = []
    for page in range(1, last_page + 1):
        print(f"Scrapping stackoverflow: page {page}")
        result = requests.get(f"{JOB_URL}&pg={page}")
        soup = BeautifulSoup(result.text, "html.parser")
        results = soup.find_all("div", {"class":"-job"})
        jobs += map(lambda result: extract_job(result), results)
    return jobs

def extract_job(result):
    title = extract_title(result)
    company, location = extract_companyInfo(result)
    link = extract_link(result)
    return {
        "title": title,
        "company": company,
        "location": location,
        "link": link
    }

def extract_title(result):
    return result.find("a", {"class": "s-link stretched-link"})["title"]

def extract_companyInfo(result):
    companyInfo = result.find(
        "h3", {"class": "fc-black-700 fs-body1 mb4"}
    ).find_all("span", recursive=False)
    return map(lambda info: info.get_text(strip=True), companyInfo)

def extract_link(result):
    link = result.find("a", {"class": "s-link stretched-link"})["href"]
    return f"{INDEED_URL}{link}"
