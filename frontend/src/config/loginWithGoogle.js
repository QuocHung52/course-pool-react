import React, { useEffect, useState, useCallback } from "react"
const { REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_BASE_URL } = process.env;

// Handle google login authentication using server-side flow
// Ref: https://developers.google.com/identity/protocols/oauth2/web-server#obtainingaccesstokens
const GoogleLogin = () => {
    const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const redirectUri = `${REACT_APP_BASE_URL}/accounts/auth/login/google/`;

    const scope = [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile'
    ].join(' ');

    const params = {
        response_type: 'code',
        client_id: REACT_APP_GOOGLE_CLIENT_ID,
        redirect_uri: `${redirectUri}`,
        prompt: 'select_account',
        access_type: 'offline',
        scope
    };

    const urlParams = new URLSearchParams(params).toString();
    window.location = `${googleAuthUrl}?${urlParams}`;
};

export default GoogleLogin;