import React, { useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUsers, FaDollarSign, FaChartLine, FaEnvelope } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { GetCfcMembers, GetCmcMembers, GetTodayJoinedUsers, GetUsersWithActivePlans, GetUsersWithoutPlans } from '../Features/Admin/AdminSlice';
import { Link } from 'react-router-dom';
import TodayJoinedMembers from './TodayJoinedMembers';
import { getAllFranchise } from '../Features/Franchise/FranchiseSlice';
const Refferal = () => {
  const dispatch = useDispatch()
  const userWithActivePlans = useSelector(state => state.Admin.usersWithActivePlans)
  const userWithoutPlans = useSelector(state => state.Admin.usersWithoutPlans)
  const todayJoinedUsers = useSelector(state => state.Admin.todayJoinedUsers)
  const cfcMembers = useSelector(state => state.Admin?.cfcMembers?.data)
  const cmcMembers = useSelector(state => state.Admin?.cmcMembers?.data)
  const allFranchises = useSelector(state => state.Franchise?.getAllFranchises?.franchises)

  useEffect(() => {
    dispatch(GetUsersWithActivePlans())
    dispatch(GetUsersWithoutPlans())
    dispatch(GetTodayJoinedUsers())
    dispatch(GetCfcMembers())
    dispatch(GetCmcMembers())
    dispatch(getAllFranchise())
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
            <Card.Text className="display-4">{userWithActivePlans?.length || 0}</Card.Text>
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
            <Card.Text className="display-4">{userWithoutPlans?.length || 0}</Card.Text>
          </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center shadow-sm">
        <Link to='/admin-dashboard/today-joined-members'>
          <Card.Body>
          <FaUsers size={30} color="#4CAF50" />
            <Card.Title className="mt-2">Today Joined Members</Card.Title>
            <Card.Text className="display-4">{todayJoinedUsers?.length || 0}</Card.Text>
          </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center shadow-sm">
          <Link to='/admin-dashboard/plan-member'>
          <Card.Body>
            <FaUsers size={30} color="#4CAF50" />
            <Card.Title className="mt-2">CFC Members</Card.Title>
            <Card.Text className="display-4">{cfcMembers?.length || 0}</Card.Text>
          </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center shadow-sm">
          <Link to='/admin-dashboard/plan-member'>
          <Card.Body>
            <FaUsers size={30} color="#4CAF50" />
            <Card.Title className="mt-2">CMC Members</Card.Title>
            <Card.Text className="display-4">{cmcMembers?.length || 0}</Card.Text>
          </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col md={3} sm={6} className="mb-4">
        <Card className="text-center shadow-sm">
          <Link to='/admin-dashboard/plan-member'>
          <Card.Body>
            <FaUsers size={30} color="#4CAF50" />
            <Card.Title className="mt-2">All Franchises</Card.Title>
            <Card.Text className="display-4">{allFranchises?.length || 0}</Card.Text>
          </Card.Body>
          </Link>
        </Card>
      </Col>
    </Row>

    <TodayJoinedMembers/>
  </Container>
  )
}

export default Refferal