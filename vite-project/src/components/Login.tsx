import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '../styles/login.css';
import { FormEvent, useState } from "react";
import { api } from "../lib/axios";


const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    api.post('login', {
      username,
      password
    })
    
    console.log("submit", {username, password});
  };

  return (  
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList" aria-label="Manage your account">
      <Tabs.Trigger className="TabsTrigger" value="tab1">Account</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="TabsContent" value="tab1">
      <form className="form" onSubmit={handleSubmit}>
        <p className="Text">Make changes to your account here. Click save when you're done.</p>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">Username</label>
          <input className="Input" id="username" value={username} onChange={event => setUserName(event.target.value)}/>
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="passoword">Password</label>
          <input className="Input" id="password" id="username" value={password} onChange={event => setPassword(event.target.value)}/>
        </fieldset>
        <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
          <button className="Button green">Log-In</button>
        </div>
      </form>
    </Tabs.Content>
  </Tabs.Root>
  )
  };

export default Login;

