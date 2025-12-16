import { motion } from 'framer-motion';
import './EmailSidebar.css';

const EmailSidebar = () => {
    return (
        <motion.div
            className="side-element right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
        >
            <motion.a
                href="mailto:adithyagurikani@gmail.com"
                className="email-link"
                whileHover={{ y: -3, color: 'var(--green)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                adithyagurikani@gmail.com
            </motion.a>
        </motion.div>
    );
};

export default EmailSidebar;
