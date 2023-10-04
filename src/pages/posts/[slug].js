import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '@/components/Layout'
import { getPostBySlug, getAllPosts, getLatestPost } from '@/lib/getPost'
import { Box, Container, Image, Spacer, Text } from '@chakra-ui/react'
import Head from 'next/head'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import ReactMarkdown from 'react-markdown'

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'content',
        'coverImage'
    ])
    const latestPost = getLatestPost(['slug', 'title', 'date']);

    return {
        props: { post, latestPost },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}

const newTheme = {
    p: ({ children }) => (
        <Text as={'p'} mb={2} fontSize={'medium'} lineHeight={10}>
            {children}
        </Text>
    ),
    h2: ({ children }) => (
        <Text as={'h2'} mb={2} fontSize={'2xl'} lineHeight={10} fontWeight={"bold"}>
            {children}
        </Text>
    ),
};

export default function Post({ post }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <Layout title={post.title}>
            <Container maxW={"container.md"}>
                <Box as={"article"}>
                    <Text as={"h1"} fontSize={"4xl"} fontWeight={"black"}>{post.title}</Text>
                    {
                        post.coverImage && (
                            <Image src={post.coverImage} alt={post.title} w={"full"} rounded={"lg"} my={6}/>
                        )
                    }
                    <Spacer as={"hr"} my={3}/>
                    <ReactMarkdown
                        components={ChakraUIRenderer(newTheme)}>
                        {post.content}
                    </ReactMarkdown>
                </Box>
            </Container>
        </Layout>
    )
}