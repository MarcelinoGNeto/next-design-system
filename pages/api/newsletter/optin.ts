import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";

//supabase Setup ==========
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const dbClient = createClient(SUPABASE_URL, SUPABASE_KEY);
//=========================

const httpStatus = {
  Success: 200,
  BadRequest: 400,
  NotFound: 404,
  InternalServerError: 500,
}

const controllerByMethod = {
  async POST(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body.emailNewsletter)
    const email = req.body.emailNewsletter;

    if(!Boolean(email) || !email.includes("@")) {
      res
        .status(httpStatus.BadRequest)
        .json({ message: "Você precisa enviar um email válido. Ex: teste@teste.com!" })
        return;
    }

    //Supabase conta com recursos internos para Sanitize do email
    //Cadastra email para recebimento de newsletter
    const { data, error } = await dbClient.from("newsletter_users").insert({ email: email, optin: true });
    console.log("Erro: ", error);    
    
    //Cadastra email como usuário da plataforma
    await dbClient.auth.admin.createUser({ email: email });

    res
      .status(httpStatus.Success)
      .json({ message: "Post request!", data })
  },
  
  async GET(req: NextApiRequest, res: NextApiResponse) {
    const { data, error } = await dbClient.from("newsletter_users").select("*");
      console.log(data);    
      console.log(error);

      res
      .status(httpStatus.Success)
      .json({ message: "Get request", total: data.length, data })
  }
}


export default function handler(
  request: NextApiRequest, 
  response: NextApiResponse
) {
  const controller = controllerByMethod[request.method];
  if(!controller) {
    response
    .status(httpStatus.NotFound)
    .json({ message: "Nada encontrado por aqui :(" });
    return;
  }
  
  controller(request, response);
}
