import conf from "../conf/conf";
import { Account, ID ,Client} from "appwrite";

export class authServices{
    client = new Client();
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account=new Account(this.client)
    }
    
    // Getting user details
    async getUserDetails(){
        try{
            let userLoginData= await this.account.get()
            return userLoginData
        }
        catch(error){
            console.log("Apwrite service :: getUserDetails :: error", error)
        }
        return null;
    }

    // creating user account
    async CreateAccount({email, password, name}){
        try{
            let userAccount = await this.account.create(ID.unique(), email,password, name)
            if(userCreation){
                return this.userLogin(email,password)
            }
            else{
                return userAccount
            }
        }
        catch(error){
            throw error
        }
    }

    // Login to user Account
    async LoginAccount({email,password}){
        try{
            let userLogin= await this.account.createEmailSession(email,password)
             return userLogin
        }
        catch(error){
            throw error
        }
    } 

    // logout user
    async logoutAccount({userId}){
        try{
            return await this.account.deleteSession(userId)
        }
        catch(error){
            console.log("Apwrite service :: userLogout :: error", error)
        }
    }


}

