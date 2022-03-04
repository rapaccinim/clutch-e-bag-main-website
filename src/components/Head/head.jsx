import Head from "next/head";

const HeadSEO = ({title, description, pageURL, imageURL}) => {
    const productionURL = `https://www.clutchebag.com/`
    const ogURL = productionURL + pageURL === 'home' ? '' : pageURL
    const ogImageURL = productionURL + imageURL
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description}  />
            <meta property="og:url" content={ogURL} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={ogImageURL} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
export default HeadSEO;