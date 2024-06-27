import { useEffect } from 'react'

const SmoothScroll = () => {
    useEffect(() => {
        // Function to handle the smooth scroll behavior
        const handleClick = (e) => {
            e.preventDefault()

            // Extract the href value from the clicked anchor
            const href = e.currentTarget.getAttribute('href')

            // Find the element with the corresponding id and scroll into view
            const targetElement = document.querySelector(href)
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                })
            }
        }

        // Attach the click event listener to all anchor elements
        const anchors = document.querySelectorAll('a[href^="#"]')
        anchors.forEach((anchor) => {
            anchor.addEventListener('click', handleClick)
        })

        // Cleanup: remove event listener on component unmount
        return () => {
            anchors.forEach((anchor) => {
                anchor.removeEventListener('click', handleClick)
            })
        }
    }, [])
}

export default SmoothScroll