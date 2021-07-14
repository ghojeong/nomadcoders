import requests
from bs4 import BeautifulSoup

LIMIT = 50
INDEED_URL = f"https://www.indeed.com/jobs?q=python&limit={LIMIT}"

def extract_indeed_pages():
    result = requests.get(INDEED_URL)
    soup = BeautifulSoup(result.text, "html.parser")
    pagination = soup.find("div", { "class": { "pagination" } })
    links = pagination.find_all('a')

    pages = []
    for link in links[:-1]:
        pages.append(int(link.find("span").string))

    return pages[-1]

def extract_indeed_jobs(last_page):
    jobs = []
    # for page in range(last_page):
    for page in range(0, 1):
        result = requests.get(f"{INDEED_URL}&start={page * LIMIT}")
        soup = BeautifulSoup(result.text, "html.parser")
        results = soup.find_all("td", {"class": "resultContent"})
        for result in results:
            title = extract_title(result)
            company = extract_company(result)
            print(title, company)
    return jobs

def extract_title(resultContent):
    result = resultContent.find("h2", {"class":"jobTitle"})
    return result.find(title=True)["title"]

def extract_company(resultContent):
    result = resultContent.find("span", {"class":"companyName"})
    anchor = result.find("a")
    company = anchor.string if anchor is not None else result.string
    return str(company).strip()
