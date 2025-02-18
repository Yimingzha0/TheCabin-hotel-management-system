
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://wbkirvfofcfxnpwrrgtv.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6India2lydmZvZmNmeG5wd3JyZ3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1Nzk2NDYsImV4cCI6MjA1NDE1NTY0Nn0.coFZ8-mvveaaua8ATOrR3xtDzd9quPA1TeMKJw6UiSA"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase