import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

interface ServerState {
  submitting: boolean;
  status: { ok: boolean; msg: string } | null;
}

const ContactForm: React.FC = () => {
  const [serverState, setServerState] = useState<ServerState>({
    submitting: false,
    status: null,
  });

  const handleServerResponse = (
    ok: boolean,
    msg: string,
    form: HTMLFormElement
  ) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setServerState({ submitting: true, status: null });
    axios({
      method: "post",
      url: "https://formspree.io/f/xeokbeyk",
      data: new FormData(form),
    })
      .then(() => {
        handleServerResponse(
          true,
          "Your message has been sent. Thank you!",
          form
        );
      })
      .catch((r) => {
        handleServerResponse(
          false,
          r.response?.data?.error || "An error occurred.",
          form
        );
      });
  };

  return (
    <div id="contact" className="component-container contact-background">
      <h3>Contact</h3>
      <form onSubmit={handleOnSubmit} className="form-container">
        <label htmlFor="email">Your Email:</label>
        <input id="email" type="email" name="email" required />
        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message"></textarea>
        <button type="submit" disabled={serverState.submitting}>
          Send
        </button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
