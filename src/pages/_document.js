import Document, { Html, Head, Main, NextScript } from "next/document";

class myDocument extends Document {
    render() {
        return(
            <Html lang="en">
                <Head>
                    <title>Shoes Shop</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
};

export default myDocument;