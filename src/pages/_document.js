import Document, { Html, Head, Main, NextScript } from 'next/document'

// Iubenda cookie banner integration. Inspired by this: https://github.com/vercel/next.js/discussions/12223
const cookieImplementation = `
<script type="text/javascript">
var _iub = _iub || [];
_iub.csConfiguration = {"askConsentAtCookiePolicyUpdate":true,"ccpaAcknowledgeOnDisplay":true,"ccpaApplies":true,"consentOnContinuedBrowsing":false,"cookiePolicyInOtherWindow":true,"enableCcpa":true,"floatingPreferencesButtonDisplay":"bottom-right","invalidateConsentWithoutLog":true,"lang":"en-GB","perPurposeConsent":true,"siteId":2641020,"whitelabel":false,"cookiePolicyId":99081748,"cookiePolicyUrl":"https://www.iubenda.com/privacy-policy/46303809/cookie-policy","privacyPolicyUrl":"https://www.iubenda.com/privacy-policy/46303809", "banner":{ "acceptButtonColor":"#00ff61","acceptButtonDisplay":true,"closeButtonRejects":true,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"bottom","rejectButtonColor":"#d7789aF7","rejectButtonDisplay":true }};
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