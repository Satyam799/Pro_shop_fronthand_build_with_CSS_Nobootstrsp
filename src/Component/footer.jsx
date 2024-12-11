function Footer() {

const date= new Date()

    return (
        <footer className="Footer">
            <p >ProShop &copy; {date.getFullYear()}</p>
        </footer>
    )
}

export default Footer
