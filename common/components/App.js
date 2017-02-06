import React from 'react'
import Helmet from 'react-helmet'
import Nav from './Nav'
import { StyleSheet, css } from 'aphrodite'

const App = ({ children }) => (
  <div className={css(styles.root)}>
    <Helmet title='Roadmap Planner' titleTemplate='%s - Roadmap Planner' />
    <h1 className={css(styles.title)}>Roadmap Planner</h1>
    <Nav />
    {children}
    <footer className={css(styles.footer)}>
      Copyright © 2017 <a className={css(styles.footerLink)} href='#' target='_blank'>Roadmap Planner</a>
    </footer>
  </div>
)

const styles = StyleSheet.create({
  root: {
    color: '#000',
    margin: '2rem auto',
    padding: '0 1rem'
  },
  title: {
    color: '#ccc',
    fontWeight: 'bold',
    fontSize: 24,
    backgroundColor: '#3F51B5',
    padding: 5
  },
  footer: {
    margin: '4rem auto',
    textAlign: 'center',
    color: '#b7b7b7'
  },
  footerLink: {
    display: 'inline-block',
    color: '#000',
    textDecoration: 'none'
  }
})

export default App
