import React from 'react';
import { PageLayout, PageContent } from '../../components/PageLayout';
import UserManageTable from './user_management_component/UserManageTable';

const UserManagement = () => {
  return (
    <PageLayout title="User Management">
      <PageContent>
        <UserManageTable />
      </PageContent>
    </PageLayout>
  );
};

export default UserManagement;
