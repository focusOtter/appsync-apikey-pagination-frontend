import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { Amplify } from 'aws-amplify'

Amplify.configure({
	Auth: {
		region: 'us-east-1',
		userPoolId: 'us-east-1_OUC1dLipV',
		userPoolWebClientId: '49ma003d3ersievorc9jjbd1sh',
		identityPoolId: 'us-east-1:9829a415-d241-4862-91f1-5496387470be',
	},
	aws_project_region: 'us-east-1',
	aws_appsync_graphqlEndpoint:
		'https://ke2ctwgkojfu3bwolazncxb5jm.appsync-api.us-east-1.amazonaws.com/graphql',
	aws_appsync_region: 'us-east-1',
	aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
	aws_appsync_apiKey: 'da2-a6a74qu5k5a6tk2kwx5ebp23ca',
})

function MyApp({ Component, pageProps }) {
	return (
		<AmplifyProvider>
			<Component {...pageProps} />
		</AmplifyProvider>
	)
}

export default MyApp
