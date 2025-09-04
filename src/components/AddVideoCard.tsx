
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";
import type {Dispatch, FormEvent, SetStateAction} from "react";

interface AddVideoCardProps {
    formData: {
        name: string;
        description: string;
        youtubeUrl: string;
    };
    handleAddVideo: (e: FormEvent<HTMLFormElement>) => void;
    setFormData: Dispatch<SetStateAction<{
            name: string;
            description: string;
            youtubeUrl: string;
        }>
    >;
}


const AddVideoCard = ({formData, handleAddVideo, setFormData } : AddVideoCardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 mb-2">
                    Add New Video
                </CardTitle>
                <CardDescription>Add a YouTube video to your learning collection</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleAddVideo} className="space-y-4">
                    <div>
                        <Label htmlFor="name">Video Name</Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Enter video title"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="mt-1"
                        />
                    </div>

                    <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Enter video description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            required
                            className="mt-1"
                            rows={3}
                        />
                    </div>

                    <div>
                        <Label htmlFor="youtubeUrl">YouTube URL</Label>
                        <Input
                            id="youtubeUrl"
                            type="url"
                            placeholder="https://www.youtube.com/watch?v=..."
                            value={formData.youtubeUrl}
                            onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                            required
                            className="mt-1"
                        />
                    </div>

                    <Button type="submit" className="w-full" style={{ backgroundColor: "#6420FF" }}>
                        Add Video
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
export default AddVideoCard
