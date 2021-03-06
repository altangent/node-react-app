import React from 'react';
import { Route } from 'react-router-dom';
import { AppNav } from '../components/navbar';
import { HomeScene } from './home/home-scene';

export const Layout = () => {
  return (
    <div className="layout">
      <div className="content">
        <div className="container">
          <AppNav />
        </div>
        <div className="container mt-3">
          <Route exact path="/" component={HomeScene} />
          {/* other routes go here */}
        </div>
      </div>
      <footer className="footer">
        <div>Copyright &copy; {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
};
