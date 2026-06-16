import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCP-N3gsRfmb7NRR5fCS_IQNug8xvg7L8w",
  authDomain: "chat-app-gs-2e729.firebaseapp.com",
  projectId: "chat-app-gs-2e729",
  storageBucket: "chat-app-gs-2e729.firebasestorage.app",
  messagingSenderId: "407988779559",
  appId: "1:407988779559:web:83f0c73f1d11fc5acc6c02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username,email,password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await setDoc(doc(db,"users",user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Hey, There i am using chat app",
            lastSeen:Date.now()
        })
        await setDoc(doc(db,"chats",user.uid),{
            chatData:[]
        })
    } catch (error) {
          console.error(error);
           toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email,password) => {
    try{
        await signInWithEmailAndPassword(auth,email,password);
    }catch(error){
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }

}

const logout = async () => {
    try{
       await signOut(auth)
    }catch(error){
         console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
   
}

export {signup,login,logout,auth,db}