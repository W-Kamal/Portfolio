import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = 'https://ddeaqslpkdqokytenaul.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkZWFxc2xwa2Rxb2t5dGVuYXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTMyMDQ4NTIsImV4cCI6MTk2ODc4MDg1Mn0._zjgHNg4YCBohHPvzbyHqAQSwr8bpgGySGbTqlLh2tw';

/**
 * @function createClient - Creates a new Supabase client instance
 * @param {string} NEXT_PUBLIC_SUPABASE_URL URL value of the Supabase instance
 * @param {string} NEXT_PUBLIC_SUPABASE_KEY API key of the Supabase instance
 */
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
)