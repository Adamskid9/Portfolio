import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xjbpqotllyjfwlhxmdho.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqYnBxb3RsbHlqZndsaHhtZGhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAwNTEzMjMsImV4cCI6MjAxNTYyNzMyM30.7fVS0NgqR7LoWGPZr0gwhjG0XgzQ_YMI_VHqR4VIHns'
const supabase = createClient(supabaseUrl, supabaseKey)

export async function skil(){
const { data, error } = await supabase
.from('cabin').select('*');

if(error)return;

return data;

}
