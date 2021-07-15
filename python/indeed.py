import requests
from bs4 import BeautifulSoup

LIMIT = 50
INDEED_URL = "https://www.indeed.com"
JOB_URL = f"{INDEED_URL}/jobs?q=python&limit={LIMIT}"

def get_jobs():
    last_page = extract_pages()
    return extract_jobs(last_page)

def extract_pages():
    result = requests.get(JOB_URL)
    soup = BeautifulSoup(result.text, "html.parser")
    pagination = soup.find("div", { "class": { "pagination" } })
    links = pagination.find_all('a')

    pages = []
    for link in links[:-1]:
        pages.append(int(link.find("span").string))

    return pages[-1]

def extract_jobs(last_page):
    jobs = []
    for page in range(last_page):
        print(f"Scrapping page {page}")
        result = requests.get(f"{JOB_URL}&start={page * LIMIT}")
        soup = BeautifulSoup(result.text, "html.parser")
        results = soup.find_all("a", {"class": "result"})
        for result in results:
            job = extract_job(result)
            jobs.append(job)
    return jobs

def extract_job(result):
    return {
        "title": extract_title(result),
        "company": extract_company(result),
        "location": extract_location(result),
        "link": extract_link(result)
    }

def extract_title(result):
    result = result.find("h2", {"class":"jobTitle"})
    return result.find(title=True)["title"]

def extract_company(result):
    result = result.find("span", {"class":"companyName"})
    anchor = result.find("a")
    company = anchor.string if anchor is not None else result.string
    return str(company).strip()

def extract_location(result):
    location = result.find("div", {"class":"companyLocation"}).text
    location = str(location).strip("Remote").strip("•")
    return location if len(location) > 0 else "Remote"

def extract_link(result):
    href = result["href"]
    return f"{INDEED_URL}{href}"
