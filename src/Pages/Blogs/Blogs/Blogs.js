import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2>Blogs</h2>
      <div className="p-5">
        <div className="border border-primary border-3 rounded w-75 p-4 mb-5">
          <h3>Difference between Authentication and Authorization</h3>
          <p style={{ textAlign: "justify" }} className="mt-3 mx-3 ">
            Both Authentication and Authorization area unit utilized in respect of knowledge security that permits the safety on an automatic data
            system. Each area unit terribly crucial topics usually related to the online as key items of its service infrastructure. However, each the
            terms area unit terribly completely different with altogether different ideas. whereas it’s true that they’re usually employed in an
            equivalent context with an equivalent tool, they’re utterly distinct from one another.
          </p>
        </div>
        <div className="border border-primary border-3 rounded w-75 p-4 mb-5">
          <h3>Why are you using firebase? </h3>
          <p style={{ textAlign: "justify" }} className="mt-3 mx-3  ">
            Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase
            provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.
            <br />
            Analytics Google Analytics for Firebase offers free, unlimited reporting on as many as 500 separate events
            <br />
            Authentication Firebase Authentication makes it easy for developers to build secure authentication systems and enhances the sign-in and
            onboarding experience for users. This feature offers a complete identity solution, supporting email and password accounts, phone auth, as
            well as Google, Facebook, GitHub, Twitter login and more.
          </p>
        </div>
        <div className="border border-primary border-3 rounded w-75 p-4 mb-5">
          {" "}
          <h3>What other services does firebase provide other than authentication</h3>
          <p style={{ textAlign: "justify" }} className="mt-3 mx-3  ">
            Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide
            the same personalized experience across all of the user's devices. Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and more. Firebase Authentication integrates tightly with other Firebase
            services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
