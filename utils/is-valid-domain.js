const REG_URL = /^[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,3}(:[a-zA-Z0-9]*)?$/

export default (url) => REG_URL.test(url)
