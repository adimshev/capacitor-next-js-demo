import React from 'react';
import Link from 'next/link';
const routes = [
	[ 'First', '/' ],
	[ 'Second', 'second' ],
	[ 'Third', 'third' ],
	[ 'Fourth', 'fourth' ]
];

export default function Navigation ()
{
	return (
		<ul>
			{ routes.map ( ([ name, href ]) =>
				<li key={ href } style={{ marginTop: 10 }}>
					<Link {...{ href }}>
						<a>{ name }</a>
					</Link>
				</li>
			) }
		</ul>
	);
}
