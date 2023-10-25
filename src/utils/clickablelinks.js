import CustomLink from '../components/CustomLink'

const regexExpression = '/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g'

const transformText = (text) => {
    console.log(regexExpression)
    const re = new RegExp(regexExpression)
    const wordList = text.split(' ').map(f => { return re.test(f) ? <CustomLink link={f}/> : f + ' '})
    return wordList
}

export default transformText