import React from 'react';

import * as Component from '../styles/components/EmailItemStyles';

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

interface EmailItemProps {
  email: Email;
  deleteEmail: (id: string) => void;
}

const EmailItem: React.FC<EmailItemProps> = ({ email, deleteEmail }) => {
  return (
    <Component.Email>
      <Component.DeleteButton onClick={() => deleteEmail(email._id)}>
        Delete
      </Component.DeleteButton>
      <Component.EmailItem>
        <Component.EmailItemLabel>Message ID</Component.EmailItemLabel>
        <Component.EmailItemText>{email.messageId}</Component.EmailItemText>
      </Component.EmailItem>
      <Component.EmailItem>
        <Component.EmailItemLabel>Date</Component.EmailItemLabel>
        <Component.EmailItemText>{email.date}</Component.EmailItemText>
      </Component.EmailItem>
      <Component.EmailItem>
        <Component.EmailItemLabel>From</Component.EmailItemLabel>
        <Component.EmailItemText>{email.from.text}</Component.EmailItemText>
      </Component.EmailItem>
      <Component.EmailItem>
        <Component.EmailItemLabel>To</Component.EmailItemLabel>
        <Component.EmailItemText>{email.to.text}</Component.EmailItemText>
      </Component.EmailItem>
      <Component.EmailItem>
        <Component.EmailItemLabel>Subject</Component.EmailItemLabel>
        <Component.EmailItemText>{email.subject}</Component.EmailItemText>
      </Component.EmailItem>
    </Component.Email>
  );
};

export default EmailItem;
