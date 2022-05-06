import Document, { Html, Head, Main, NextScript } from 'next/document'

// Iubenda cookie banner integration. Inspired by this: https://github.com/vercel/next.js/discussions/12223
const cookieImplementation = `
    <script type="text/javascript">
        var _iub = _iub || [];
        _iub.csConfiguration = {"ccpaAcknowledgeOnDisplay":true,"consentOnContinuedBrowsing":false,"countryDetection":true,"enableCcpa":true,"lang":"en","siteId":2195436,"whitelabel":false,"cookiePolicyId":46303809, "banner":{ "acceptButtonCaptionColor":"#000000","acceptButtonColor":"#ffffff","acceptButtonDisplay":true,"backgroundColor":"#000001","customizeButtonCaptionColor":"white","customizeButtonColor":"#212121","customizeButtonDisplay":true,"position":"bottom","textColor":"white" }};
    </script>
    <script type="text/javascript" src="//cdn.iubenda.com/cs/ccpa/stub.js"></script>
    <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>
`

// to know more about this special page: https://nextjs.org/docs/advanced-features/custom-document
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link href="https://fonts.googleapis.com/css2?family=Antic+Didone&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                <Main />
                <NextScript />
                <div dangerouslySetInnerHTML={{ __html: cookieImplementation }}/>
                </body>
            </Html>
        )
    }
}
export default MyDocument