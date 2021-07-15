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
    # for page in range(1, last_page + 1):
    for page in range(1, 2):
        result = requests.get(f"{JOB_URL}&pg={page}")
        soup = BeautifulSoup(result.text, "html.parser")
        results = soup.find_all("div", {"class":"-job"})
        for result in results:
            print(result["data-jobid"])

    return jobs
