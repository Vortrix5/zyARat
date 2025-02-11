import {
	CBadge,
	CSidebar,
	CSidebarBrand,
	CSidebarHeader,
	CSidebarNav,
	CNavItem,
	CNavTitle,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
import {
	cilBank,
	cilClock,
	cilUser,
	cilCommentBubble,
	cilBullhorn,
	cilChart,
	cilEnvelopeOpen,
} from "@coreui/icons";

export default function SideBar() {
	return (
		<CSidebar className="border-end" unfoldable>
			<CSidebarHeader className="border-bottom">
				<CSidebarBrand>zyARat</CSidebarBrand>
			</CSidebarHeader>
			<CSidebarNav>
				<CNavTitle>Cultural Institution</CNavTitle>
				<CNavItem href="#">
					<CIcon customClassName="nav-icon" icon={cilBank} size="small" />{" "}
					Verified Institutions
				</CNavItem>
				<CNavItem href="#">
					<CIcon customClassName="nav-icon" icon={cilClock} /> Waitlist
					<CBadge color="danger ms-auto">URGENT</CBadge>
				</CNavItem>
				<CNavItem href="#">
					<CIcon customClassName="nav-icon" icon={cilEnvelopeOpen} /> Services
					Requests
				</CNavItem>
				<CNavItem href="#">
					<CIcon customClassName="nav-icon" icon={cilChart} /> Insights &
					Analytics
				</CNavItem>
				<CNavItem href="#">
					<CIcon customClassName="nav-icon" icon={cilBullhorn} /> Announcements
				</CNavItem>

				<CNavTitle>Users</CNavTitle>
				<CNavItem href="#">
					<CIcon customClassName="nav-icon" icon={cilUser} size="small" /> List
					of Users
				</CNavItem>
				<CNavItem href="#">
					<CIcon
						customClassName="nav-icon"
						icon={cilCommentBubble}
						size="small"
					/>{" "}
					Complaints
				</CNavItem>
			</CSidebarNav>
		</CSidebar>
	);
}
