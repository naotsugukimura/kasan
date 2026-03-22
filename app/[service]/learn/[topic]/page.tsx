import { notFound } from "next/navigation";
import { getService, isValidService } from "@/data/services";
import TopicPageClient from "./TopicPageClient";

type Params = Promise<{ service: string; topic: string }>;

export default async function TopicPage({ params }: { params: Params }) {
  const { service: serviceId, topic: topicId } = await params;
  if (!isValidService(serviceId)) notFound();

  const svc = getService(serviceId)!;
  const topic = svc.topics.find((t) => t.id === topicId);
  if (!topic) notFound();

  return <TopicPageClient serviceId={serviceId} topicId={topicId} topicLabel={topic.label} />;
}
