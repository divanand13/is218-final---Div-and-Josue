'use client'
import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const NewsletterForm = () => {
  return (
    <MailchimpSubscribe url= 'https://njit.us13.list-manage.com/subscribe/post?u=3f0bef50ba585909966342932&amp;id=80d56cc6ec&amp;f_id=0071ede7f0' />
  );
};

export default NewsletterForm;
