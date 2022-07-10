import React, { useState } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';

import EmailItem from '../components/EmailItem';

import * as Component from '../styles/components/AppStyles';
import GlobalStyle from '../styles/globalStyles';
import theme from '../styles/theme';

interface Email {
  date: string;
  from: {
    html: string;
    text: string;
  };
  to: {
    html: string;
    text: string;
  };
  subject: string;
  messageId: string;
  _id: string;
}

function App() {
  const [emails, setEmails] = useState<Email[] | []>([]);

  const fetchEmails = async (reset?: boolean) => {
    const { data } = await axios.get(
      `/api/v1/emails?reset=${reset ? 'true' : 'false'}`
    );
    setEmails(data.data.emails);
  };

  const deleteEmail = async (id: string) => {
    await axios.delete(`/api/v1/emails/${id}`);

    fetchEmails(false);
  };

  const renderEmailList = () => {
    if (!emails) return;
    return emails.map((email) => {
      return (
        <EmailItem deleteEmail={deleteEmail} key={email._id} email={email} />
      );
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component.Container>
        <Component.Header>
          <Component.HeadingLarge>Email Parser</Component.HeadingLarge>
        </Component.Header>
        <Component.Main>
          <Component.ButtonContainer>
            <Component.Button onClick={() => fetchEmails(true)}>
              Fetch New Emails
            </Component.Button>
            <Component.Button onClick={() => fetchEmails(false)}>
              Fetch last session Emails
            </Component.Button>
          </Component.ButtonContainer>
          <Component.EmailList>{renderEmailList()}</Component.EmailList>
        </Component.Main>
      </Component.Container>
    </ThemeProvider>
  );
}

export default App;
