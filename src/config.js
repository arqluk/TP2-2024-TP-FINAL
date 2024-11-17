const PORT = process.env.PORTDEV || 8080
const STRC = process.env.STRCDEV
const NAMEBASE = process.env.NAMEBASEDEV
const PERSISTENCE = process.env.PERSISTENCEDEV || ""
const ROLE = process.env.ROLE

export default {
    PORT,
    STRC,
    NAMEBASE,
    PERSISTENCE,
    ROLE
}
