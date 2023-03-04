import React from 'react'
import Image from 'next/image'
import Table from 'react-bootstrap/Table';

export default function Frameworks() {
    return (
        <Table hover className="border-0">
            <tbody>
                <tr>
                    <td>
                        <Image src="/frameworks/logo-nodejs.png" alt="" width={100} height={50} />
                    </td>
                    <td>
                        <Image src="/frameworks/FramerMotion.png" alt="" width={100} height={50} />
                    </td>
                    <td>
                        <Image src="/frameworks/logo-postgres.png" alt="" width={100} height={50} />
                    </td>
                    <td>
                        <Image src="/frameworks/bootstrap.png" alt="" width={100} height={50} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Image src="/frameworks/logo-postgres.png" alt="" width={100} height={50} />
                    </td> <td>
                        <Image src="/frameworks/logo-postgres.png" alt="" width={50} height={50} />
                    </td> <td>
                        <Image src="/frameworks/logo-postgres.png" alt="" width={50} height={50} />
                    </td> <td>
                        <Image src="/frameworks/logo-postgres.png" alt="" width={50} height={50} />
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>

    )
}
