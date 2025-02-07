/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2021 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';

import Heading from '../../components/Heading';
import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    const [isFirstChecked, setFirstChecked] = React.useState(false);
    const toggle = () => setFirstChecked((c) => !c);

    return (
        <DetailsLayout pattern={Pattern.RadioSwitch}>
            <Helmet>
                <meta name="description" content="Create a radio switch with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css radio switch, css switch" />
            </Helmet>
            <div className='p-8 pb-20'>
                <BrowserFrame
html={`
<!-- Container -->
<div class="container">
    <!-- Radio container -->
    <label class="container__label container__label--selected">
        <input type="radio" class="container__input" />

        <!-- Text -->
        ...
    </label>

    <!-- Other radio item -->
    ...
</div>
`}
css={`
.container {
    background-color: rgba(0, 0, 0, .1);
    border-radius: 9999px;
    display: inline-flex;
    padding: 4px;
}

.container__label {
    border-radius: 9999px;
    cursor: pointer;
    padding: 4px 8px;
}

.container__label--selected {
    /* For selected radio only */
    background-color: #357edd;
    color: #fff;
}

.container__input {
    display: none
}
`}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            justifyContent: 'center',
                            padding: '8px',
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                borderRadius: '9999px',
                                display: 'inline-flex',
                                padding: '4px',
                            }}
                        >
                            <label
                                htmlFor="radio-switch-first"
                                style={{
                                    backgroundColor: isFirstChecked ? '#357EDD' : '',
                                    borderRadius: '9999px',
                                    color: isFirstChecked ? '#FFF' : '',
                                    cursor: 'pointer',
                                    padding: '16px 8px',
                                }}
                            >
                                <input
                                    id="radio-switch-first"
                                    type="radio"
                                    style={{ display: 'none' }}
                                    checked={isFirstChecked}
                                    onChange={toggle}
                                />
                                <div
                                    style={{
                                        backgroundColor: isFirstChecked ? '#FFF' : 'rgba(0, 0, 0, 0.2)',
                                        borderRadius: '4px',
                                        height: '8px',
                                        width: '64px',
                                    }}
                                />
                            </label>
                            <label
                                htmlFor="radio-switch-second"
                                style={{
                                    backgroundColor: isFirstChecked ? '' : '#357EDD',
                                    borderRadius: '9999px',
                                    color: isFirstChecked ? '' : '#FFF',
                                    cursor: 'pointer',
                                    padding: '16px 8px',
                                }}
                            >
                                <input
                                    id="radio-switch-second"
                                    type="radio"
                                    style={{ display: 'none' }}
                                    checked={!isFirstChecked}
                                    onChange={toggle}
                                />
                                <div
                                    style={{
                                        backgroundColor: isFirstChecked ? 'rgba(0, 0, 0, 0.2)' : '#FFF',
                                        borderRadius: '4px',
                                        height: '8px',
                                        width: '64px',
                                    }}
                                />
                            </label>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
            <section>
                <Heading title="Use cases" />

                <div style={{ padding: '32px' }}>
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                            borderRadius: '9999px',
                            display: 'inline-flex',
                            padding: '4px',
                        }}
                    >
                        <label
                            style={{
                                backgroundColor: '#357EDD',
                                borderRadius: '9999px',
                                color: '#FFF',
                                cursor: 'pointer',
                                display: 'flex',
                                padding: '4px 8px',
                            }}
                        >
                            <input type="radio" style={{ display: 'none' }} />
                            Monthly
                        </label>
                        <label
                            style={{
                                borderRadius: '9999px',
                                cursor: 'pointer',
                                display: 'flex',
                                padding: '4px 8px',
                            }}
                        >
                            <input type="radio" style={{ display: 'none' }} />
                            Yearly
                        </label>
                    </div>
                </div>
            </section>
            <RelatedPatterns patterns={[Pattern.Switch]} />
        </DetailsLayout>
    );
};

export default Details;
