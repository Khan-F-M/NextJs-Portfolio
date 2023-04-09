import '@/styles/globals.css'
import MainNav from '@/components/MainNav';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainNav />
      <br />
      <br />
      <br />
      <br />
      <Component {...pageProps} />
    </>
  );
}

//Don't add the title to the document.js file because that is explaining
//the structure

// When a user navigates to the Page component, 
// Next.js passes the Page component as the Component
// prop to the App component, and sets pageProps to an 
// object with a single property, message, that contains
// a string value. The App component then renders the Page
// component, passing the message prop to it, so that the
// string value is displayed on the page.

// That's correct, you don't need to import the _app.js file
// anywhere in your Next.js application. It's automatically
// included by Next.js and used as the top-level component that
// wraps all of your other pages.

// In the case of the App component in a Next.js application, it
// provides a way for you to persist certain elements (such as headers,
// footers, and global styles) across all pages in the application. This
// means that no matter which page the user navigates to, these elements
// will remain unchanged and continue to exist.

// For example, if you have a header and footer in your App component, they
// will be present on every page in your application, and will not disappear
// or change when the user navigates to different pages. The same is true
// for any global styles that you include in the globals.css file -- they
// will persist across all pages in your application.

// Component is the React component for the current page. When a user 
// navigates to a page in your Next.js application, the React component
// for that page is passed as the Component prop to the App component. 
// The App component then renders this component, so that the content of 
// the current page is displayed.

// pageProps is an object that contains any props that you want to pass
// to the current page's component. You can use this object to pass data 
// or other values from the server to the client, or to share data between
// different pages in your application.

// Yes, you could think of the _app.js file as a way to add a global touch
// to your Next.js application. It provides a way to add styles, theme, and
// other global settings that you want to apply to all pages in your application.

// In a sense, you can think of the _app.js file as a "wrapper" for all of
// the pages in your application. It's the top-level component that wraps
// around all of your page components, providing a way to add global styles,
// behavior, or data that can be shared across all pages.

// So, you could use the _app.js file to define global styles and include
// them in your application with an import statement, or you could use it
// to include a header and footer that appear on every page, or you could
// use it to initialize a data store that you want to make available to all
// of your pages. The _app.js file provides a convenient place to do these 
// things, and gives you a way to make global changes to your application
// without having to modify every individual page component.