import fs from "fs";
import path from "path";

export default function handler(req,res){
  if(req.method!=="POST") return res.end();

  const {username,license_key}=req.body;
  const file=path.join(process.cwd(),"data/users.json");
  const users=JSON.parse(fs.readFileSync(file));

  const user=users.find(u=>u.username===username && u.license_key===license_key);

  if(!user) return res.json({status:"fail",message:"Invalid login"});
  if(user.status==="banned") return res.json({status:"fail",message:"Banned"});

  user.activated=true;
  fs.writeFileSync(file,JSON.stringify(users,null,2));

  res.json({status:"ok"});
}
