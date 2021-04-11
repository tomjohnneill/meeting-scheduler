// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.SUPABASE_API,
  process.env.SUPABASE_SERVICE_KEY
);

export default async (req, res) => {
  const { data, error } = await supabase
    .from("invitations")
    .insert([{ name: req.body.name, options: req.body.options }]);

  if (!error) {
    res.status(200).json(data);
  } else {
    res.status(400).json(error);
  }
};
