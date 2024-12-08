import React, { useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaDollarSign, FaChartLine, FaEnvelope } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { GetTodayJoinedUsers, GetUsersWithActivePlans, GetUsersWithoutPlans } from '../Features/Admin/AdminSlice';
import { Link } from 'react-router-dom';
import TodayJoinedMembers from './TodayJoinedMembers';
const Refferal = () => {
  const dispatch = useDispatch()
  const userWithActivePlans = useSelector(state => state.Admin.usersWithActivePlans)
  const userWithoutPlans = useSelector(state => state.Admin.usersWithoutPlans)
  const todayJoinedUsers = useSelector(state => state.Admin.todayJoinedUsers)

  useEffect(() => {
    dispatch(GetUsersWithActivePlans())
    dispatch(GetUsersWithoutPlans())
    dispatch(GetTodayJoinedUsers())
  },[])
  return (
    <Container fluid className="py-4">
    <h2 className="mb-4">Dashboard Overview</h2>
    <Row>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center shadow-sm">
          <Link to='/admin-dashboard/plan-member'>
          <Card.Body>
            <FaUsers size={30} color="#4CAF50" />
            <Card.Title className="mt-2">Paid Memebers</Card.Title>
            <Card.Text className="display-4">{userWithActivePlans?.length}</Card.Text>
          </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center shadow-sm">
        <Link to='/admin-dashboard/free-member'>
          <Card.Body>
          <FaUsers size={30} color="#4CAF50" />
            <Card.Title className="mt-2">Free Memebers</Card.Title>
            <Card.Text className="display-4">{userWithoutPlans?.length}</Card.Text>
          </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center shadow-sm">
        <Link to='/admin-dashboard/today-joined-members'>
          <Card.Body>
            <FaChartLine size={30} color="#FF5722" />
            <Card.Title className="mt-2">Today Joined Members</Card.Title>
            <Card.Text className="display-4">{todayJoinedUsers?.length}</Card.Text>
          </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center shadow-sm">
          <Card.Body>
            <FaEnvelope size={30} color="#FFC107" />
            <Card.Title className="mt-2">New Messages</Card.Title>
            <Card.Text className="display-4">42</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <TodayJoinedMembers/>
  </Container>
  )
}

export default Refferal