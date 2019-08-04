# Open Journal
Open Journal Journal by Team ShaktiMaan made in ETH India hackathon.

# The problem Open Journal solves

We have created a platform to empower innovators and creators who create some digital consumable contents be it some artistic content, poetry, blog and as important contents as research papers. So we initially started with the idea to create a platform for the researchers who face problems in getting reviewed their papers. As it is a time taking process and we have a monopoly of IEEE who governs and distributes it via its own platform.

So we created a decentralized platform where the researchers can put their work and the fellow researchers can download it and review it. So there will be a charge to download the paper and it can be set by the researcher. After downloading if the fellow researcher chooses to review it, correct it then he can be awarded some cryptos back as well.

The major concerns that can be addressed by this Dapp are:

This process is slow and we have to buy a license to download these papers.
Since it is in blockchain no data can be tampered and will help to check the case of plagiarism.
Ensuring trust and transparency between all the participants is a must since there is no central authority.

We also realized that it is just a single use case of our platform. We may have a Dapp where any creator can share his/her work and any consumer can micro fund it as a token of appreciation. Also, any creator can lease or sell his creations that includes memes, art, poetry.

# Challenges that we ran into

We wanted to use Torus to have an SSO with Google and third-party application which would enable any user to login in a single click. So we started integrating it and sat with the mentors and we realized that the features which we were expecting to use are yet to be released in the upcoming versions.

We have deployed it in the Matic Network. We were facing a lot of issues as we were unable to deploy it in the Matic Network. Again we sat and discussed it with the mentors from Matic Network. And finally, after a lot of trial and error, we were able to deploy it.

We also realized that there were some bugs in our contracts that were creating some problems in the deployment. We fixed it and tested every method exposed.

# Installation

1. Install Metamask and connect to `Matic TestNet` on `https://testnet2.matic.network`
2. Clone the repository and install the dependencies. prefere running `yarn` over `npm install`
3. Install `truffle-cli` globally. `npm install -g truffle-cli`
4. To compile, `cd ethereum && truffle compile`
5. To run the development version: from root of project, `yarn run dev`
6. Open [http://localhost:3000](http://localhost:3000)

# Basic Understanding of the project

## Creating account and logging in
1. First Register [http://localhost:3000/register](http://localhost:3000/register)
2. Put on your Metamask account address as ETH Address. You'll be redirected to Signin if you're registered successfully.
3. To login, just put in your ETH Address. You can use Torus for login as well.

## Creating your own resource
1. Click on `+` button or select link from side menu for adding a resource.
2. Create and click on save button.
3. You'll be redirected to your list of resources.


## Sharing your resource with others for review
1. See the list of your resources.
2. Click on the three dots and copy the hash of that particular resource.
3. You can share this hash with your fellow researchers/friends who will be reviewing the content.

## To review research papers/content
1. Get the hash of the content obtained from your fellow researchers/colleagues/friends.
2. Now on Submit Review Page, paste this hash and press `space bar`
3. You can now review, rate, comment and see the content of that particular research paper/content.

## Misclleaneous Features
- Runs on Matic Network so the speed is super fast.
- Very intuitive UI/UX.
- Removes the middleman.
- Helps in the detection of plagarism.
- Fasten up the traditional and slow reviewing system.

## Future Implementation
- You can select the minimum price you should get for each download of your content.
- Broaden up the Serviceable Adressable Market by generalising to all kind of contents.
- Work closely with Micro Payments.
