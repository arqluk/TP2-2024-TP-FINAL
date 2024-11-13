const PORT = process.env.PORTDEV || 8081
const STRC = process.env.STRCDEV
const NAMEBASE = process.env.NAMEBASEDEV
const PERSISTENCE = process.env.PERSISTENCEDEV || ""

export default {
    PORT,
    STRC,
    NAMEBASE,
    PERSISTENCE
}
