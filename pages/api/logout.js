import withSession from '@/lib/session';
import { apiUrl } from '@/lib/url_helper';
import axios from 'axios';

const logoutHandler = async (req, res) => {
    // if (req.method !== 'POST') {
    //     return res.status(405).json({ message: 'Method not allowed' });
    // }
   try{
        await axios.post(apiUrl('/api/logout'), {}, {
            headers: {
            Authorization: `Bearer ${req.session.get('api_token')}`,
            'Content-Type': 'application/json',
            },
        });
        // Destroy session
        req.session.destroy((error) => {
            if (error) {
            console.error('Session destruction error:', error);
            }
        });
        
        // Return success response
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.error('Logout error:', error);
        if (error.response) {
            res.status(error.response.status).json({ message: error.response.data });
        } else if (error.request) {
            // Axios request error
            res.status(503).json({ message: 'Service unavailable' });
        } else {
            // General error
            res.status(500).json({ message: error });
        }
    }
};

export default withSession(logoutHandler);
