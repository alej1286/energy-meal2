/* eslint-disable no-unused-vars */
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useRolReposStore } from './../store/RolRepo';
import { fetchAuthSession } from 'aws-amplify/auth';
import { DataStore } from 'aws-amplify/datastore';
import { Navigation } from '../models';
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";

const classNameFunc = ({ isActive }) => (isActive ? ' no-underline bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' : 'no-underline text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium');

const classNameFuncSmall = ({ isActive }) => (isActive ? 'no-underline bg-gray-900 text-white rounded-md px-5 py-1 text-sm font-medium' : 'no-underline text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium:bg-gray-700');



function Navbar(props) {
  const [nav, setNavigation] = useState([])
  //const {data, isLoading, isSuccess } = useFetchNavigationApi()
  const { rol, setRol } = useRolReposStore();
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();

  async function fetchData() {
    const models = await DataStore.query(Navigation);
    console.log(models);
  }

useEffect( ()=>{

  

  fetchData();
  
  },[])


  return (
    <div>
      
    </div>
  );
}

export default Navbar;