import {createClient} from "@supabase/supabase-js"

const supaseURL = import.meta.env.URL
const supabase_API_KEY= import.meta.env.API_KEY

console.log("URL: ",supaseURL)
console.log("KEY: ", supabase_API_KEY)

const supabase = createClient(supaseURL,supabase_API_KEY)
export default supabase