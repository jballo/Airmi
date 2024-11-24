"use client";
import { Button } from "@/components/ui/button";
import {
  AcceptedFriendsList,
  PendingFriendsList,
} from "./_components/friends-list";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AddFriend } from "./_components/add-friend";

export default function FriendsPage() {
  return (
    <div className="flex-1 flex-col flex divide-y">
      <header className="flex items-center justify-between p-4">
        {/* Code comment */}
        {/* other suggestions *\

        <h1 className="text-2xl font-semibold">Friends</h1>
        <Button>Find Friends</Button>
      </header>
      <div className="flex-1 flex divide-x">
        <TooltipProvider>
          <PendingFriendsList />
          <AcceptedFriendsList />

          <AddFriend />
          
          
        </TooltipProvider>
      </div>
    </div>
  );
}
