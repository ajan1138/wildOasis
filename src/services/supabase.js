import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xcxtxwypejoeluwfdieh.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjeHR4d3lwZWpvZWx1d2ZkaWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3ODE3OTAsImV4cCI6MjAzNDM1Nzc5MH0.dovCPqTCeDDhSdJ6ZDbMYNSmPH45S6z7TAO2zeed7MA`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
