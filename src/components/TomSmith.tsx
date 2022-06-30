import React from 'react'
import "../style/css/components/TomSmith.css"
import { motion } from "framer-motion"

// Falling Blocks

type TFallingBlock = {
	xOffset: number;	// Position along the x-axis
	fallDelay?: number	// (OPTIONAL) delay before a block starts falling
}

/**
 * Represents a single falling block 
 * @param props see TFallingBlock above 
 * @returns A single FallingBlock
 */
const FallingBlock = ({ xOffset, fallDelay = 0 }: TFallingBlock) => {
	return (
		<motion.div
			className='square'
			initial={{ x: xOffset, y: -650 }}
			animate={{ y: 500, rotate: 720 }}
			transition={{ duration: 6, repeat: Infinity, type: "tween", delay: fallDelay }}
		></motion.div>
	)
}

// Title

type TLetterPath = {
	d: string;			// defines the path to be drawn
	strokeDash: number	// defines pattern of dashes and gaps in letters
}

/**
 * Represents each letter in the title sequence
 * @param props see TLetterPath above 
 * @returns A single letter
 */
const LetterPath = ({ d, strokeDash }: TLetterPath) => {
	return <motion.path 
		animate={{strokeDasharray: strokeDash, strokeDashoffset: strokeDash}} 
		d={d}
		stroke="white" 
		strokeWidth="3" />

}

// TomSmith title page

/**
 * The title page with my name on it
 * @returns The title page component
 */
function TomSmith() {
	const numOfBlocks = 2*Math.floor(window.screen.width/100);

	let falling_blocks: number[] = []
	for (let i=0; i<numOfBlocks; i++) falling_blocks.push(i);

	return (
		<div className='tom-smith'>
			<motion.svg drag dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}} viewBox="0 0 355 49" fill="none" xmlns="http://www.w3.org/2000/svg">
				<LetterPath strokeDash={157} d="M35.721 2.77398V11.405H24.003V47H13.23V11.405H1.51196V2.77398H35.721Z"/>
				<LetterPath strokeDash={221} d="M62.0436 47.441C57.8856 47.441 54.0636 46.475 50.5776 44.543C47.1336 42.611 44.3826 39.923 42.3246 36.479C40.3086 32.993 39.3006 29.087 39.3006 24.761C39.3006 20.435 40.3086 16.55 42.3246 13.106C44.3826 9.66198 47.1336 6.97398 50.5776 5.04198C54.0636 3.10998 57.8856 2.14398 62.0436 2.14398C66.2016 2.14398 70.0026 3.10998 73.4466 5.04198C76.9326 6.97398 79.6626 9.66198 81.6366 13.106C83.6526 16.55 84.6606 20.435 84.6606 24.761C84.6606 29.087 83.6526 32.993 81.6366 36.479C79.6206 39.923 76.8906 42.611 73.4466 44.543C70.0026 46.475 66.2016 47.441 62.0436 47.441ZM62.0436 37.613C65.5716 37.613 68.3856 36.437 70.4856 34.085C72.6276 31.733 73.6986 28.625 73.6986 24.761C73.6986 20.855 72.6276 17.747 70.4856 15.437C68.3856 13.085 65.5716 11.909 62.0436 11.909C58.4736 11.909 55.6176 13.064 53.4756 15.374C51.3756 17.684 50.3256 20.813 50.3256 24.761C50.3256 28.667 51.3756 31.796 53.4756 34.148C55.6176 36.458 58.4736 37.613 62.0436 37.613Z" />
				<LetterPath strokeDash={320} d="M140.739 2.77398V47H129.966V20.477L120.075 47H111.381L101.427 20.414V47H90.654V2.77398H103.38L115.791 33.392L128.076 2.77398H140.739Z" />
				<LetterPath strokeDash={212} d="M177.839 47.441C174.605 47.441 171.707 46.916 169.145 45.866C166.583 44.816 164.525 43.262 162.971 41.204C161.459 39.146 160.661 36.668 160.577 33.77H172.043C172.211 35.408 172.778 36.668 173.744 37.55C174.71 38.39 175.97 38.81 177.524 38.81C179.12 38.81 180.38 38.453 181.304 37.739C182.228 36.983 182.69 35.954 182.69 34.652C182.69 33.56 182.312 32.657 181.556 31.943C180.842 31.229 179.939 30.641 178.847 30.179C177.797 29.717 176.285 29.192 174.311 28.604C171.455 27.722 169.124 26.84 167.318 25.958C165.512 25.076 163.958 23.774 162.656 22.052C161.354 20.33 160.703 18.083 160.703 15.311C160.703 11.195 162.194 7.98198 165.176 5.67198C168.158 3.31998 172.043 2.14398 176.831 2.14398C181.703 2.14398 185.63 3.31998 188.612 5.67198C191.594 7.98198 193.19 11.216 193.4 15.374H181.745C181.661 13.946 181.136 12.833 180.17 12.035C179.204 11.195 177.965 10.775 176.453 10.775C175.151 10.775 174.101 11.132 173.303 11.846C172.505 12.518 172.106 13.505 172.106 14.807C172.106 16.235 172.778 17.348 174.122 18.146C175.466 18.944 177.566 19.805 180.422 20.729C183.278 21.695 185.588 22.619 187.352 23.501C189.158 24.383 190.712 25.664 192.014 27.344C193.316 29.024 193.967 31.187 193.967 33.833C193.967 36.353 193.316 38.642 192.014 40.7C190.754 42.758 188.906 44.396 186.47 45.614C184.034 46.832 181.157 47.441 177.839 47.441Z" />
				<LetterPath strokeDash={320} d="M250.681 2.77398V47H239.908V20.477L230.017 47H221.323L211.369 20.414V47H200.596V2.77398H213.322L225.733 33.392L238.018 2.77398H250.681Z" />
				<LetterPath strokeDash={110} d="M269.201 2.77398V47H258.428V2.77398H269.201Z" />
				<LetterPath strokeDash={157} d="M308.824 2.77398V11.405H297.105V47H286.333V11.405H274.615V2.77398H308.824Z" />
				<LetterPath strokeDash={237} d="M352.534 2.77398V47H341.761V28.793H325.003V47H314.23V2.77398H325.003V20.099H341.761V2.77398H352.534Z" />
			</motion.svg>
			<motion.p initial={{opacity: 0, y: 25}} animate={{opacity: 1, y: 0}} transition={{delay: 3, duration: 1}}>
				Full Stack Developer
			</motion.p>
			<div className='bg-wrapper'>
				{falling_blocks.map(i => <FallingBlock xOffset={(100*i)%window.screen.width} fallDelay={0.3*i} key={i}/>)}
				{falling_blocks.map(i => <FallingBlock xOffset={window.screen.width-((100*i)%window.screen.width)} fallDelay={0.3*i} key={i}/>)}
			</div>
		</div>
	)
}

export default TomSmith