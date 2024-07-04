// usecase for type casting

const year:HTMLElement = document.getElementById("year")!
const thisYear:string = new Date().getFullYear() as unknown as string
year.setAttribute('datetime', thisYear)
year.textContent = thisYear