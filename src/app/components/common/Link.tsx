import React from 'react';
import Link from 'next/link';

interface LinkProps {
    href: string;
    label: string;
}

const CustomLink: React.FC<LinkProps> = ({ href, label }) => {
    return (
        <Link className="px-4 py-2 bg-blue-500 text-white rounded" href={href}>
            {label}
        </Link>
    );
};

export default CustomLink;