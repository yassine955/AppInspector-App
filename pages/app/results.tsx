import { BodyComp } from '@/components/Body';
import IconWithLoading from '@/components/IconWithLoading';
import { db } from '@/src/drizzle/db';
import { apps, AppType } from '@/src/drizzle/schema/apps';
import { ilike } from 'drizzle-orm';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import { TableComponent } from '@/components/TableComponent';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const get_all_apps_by_title = await db
    .select({
      id: apps.id,
      title: apps.title,
      version: apps.version,
      platform: apps.platform,
      financial_risk: apps.financial_risk,
      privacy_risk: apps.privacy_risk,
      reliability_risk: apps.reliability_risk,
      system_risk: apps.system_risk,
    })
    .from(apps)
    .where(ilike(apps.title, `%${String(query?.title).trim()}%`));

  if (get_all_apps_by_title.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      all_apps: get_all_apps_by_title,
    },
  };
};

export default function Home({ all_apps }: { all_apps: AppType[] }) {
  const [loading, setLoading] = useState(true);
  const { push } = useRouter();

  useEffect(() => {
    if (all_apps) {
      setLoading(false);
    }
  }, [all_apps]);

  return (
    <Fragment>
      <BodyComp>{loading ? <p>Loading</p> : <TableComponent all_apps={all_apps} />}</BodyComp>
    </Fragment>
  );
}
