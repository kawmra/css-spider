const MIN_HEIGHT = 200
const MAX_HEIGHT = 600
const SPIDERS_COUNT = 8

const spiders = document.querySelector('.spiders')
console.log(spiders)
for (var i = 0; i < SPIDERS_COUNT; i++) {
    spiders.appendChild(createSpider())
}

function createSpider(): HTMLElement {
    const color = `#${createRandomColorHex()}`
    const spiderString = createElement('spider-string')
    spiderString.style.backgroundColor = color
    const spiderBody = createElement('spider-body')
    spiderBody.innerHTML = '<i class="fas fa-spider"></i>'
    const spider = createElement('spider')
    spider.style.color = color
    spider.style.height = `${Math.random() * (MAX_HEIGHT - MIN_HEIGHT) + MIN_HEIGHT}px`
    spider.appendChild(spiderString)
    spider.appendChild(spiderBody)
    setListeners(spider, spiderBody)
    return spider
}

function createElement(className: string): HTMLElement {
    const e = document.createElement('div')
    e.classList.add(className)
    return e
}

function setListeners(spider: HTMLElement, spiderBody: HTMLElement) {
    spiderBody.addEventListener('mouseenter', (e) => {
        if (!spider.classList.contains('animating')) {
            spider.classList.add('animating')
            setTimeout(() => {
                spider.classList.remove('animating')
            }, 8000)
        }
    })
}

function createRandomColorHex(): string {
    return ('00000' + (Math.random() * 0xffffff).toString(16)).slice(-6)
}
